import React, { useState } from "react";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import { Product } from "../types/product";

interface FilterOptions {
  brands: string[];
  categories: { [key: string]: string[] };
  technicalProperties: { [key: string]: string[] };
}

interface ProductFiltersProps {
  products: Product[];
  selectedFilters: {
    brand: string[];
    category: string[];
    technicalDetails: { [key: string]: string[] };
  };
  onFilterChange: (filters: any) => void;
}

export default function ProductFilters({
  products,
  selectedFilters,
  onFilterChange,
}: ProductFiltersProps) {
  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean;
  }>({
    categories: true,
    brands: false,
    technical: false,
  });

  const [expandedCategories, setExpandedCategories] = useState<{
    [key: string]: boolean;
  }>({});

  // Generate filter options from all products
  const filterOptions = React.useMemo(() => {
    const options: FilterOptions = {
      brands: Array.from(new Set(products.map((p) => p.brand))).sort((a, b) =>
        a.localeCompare(b, "tr")
      ),
      categories: {},
      technicalProperties: {},
    };

    // Process categories
    products.forEach((product) => {
      product.categoryTree.forEach((category, index) => {
        if (index === 0) {
          if (!options.categories[category]) {
            options.categories[category] = [];
          }
        } else {
          const parentCategory = product.categoryTree[index - 1];
          if (!options.categories[parentCategory]) {
            options.categories[parentCategory] = [];
          }
          if (!options.categories[parentCategory].includes(category)) {
            options.categories[parentCategory].push(category);
          }
        }
      });

      // Process technical details
      product.technicalDetails.forEach((detail) => {
        if (!options.technicalProperties[detail.propertyName]) {
          options.technicalProperties[detail.propertyName] = [];
        }
        if (
          !options.technicalProperties[detail.propertyName].includes(
            detail.valueName
          )
        ) {
          options.technicalProperties[detail.propertyName].push(
            detail.valueName
          );
        }
      });
    });

    // Sort subcategories
    Object.keys(options.categories).forEach((category) => {
      options.categories[category].sort((a, b) => a.localeCompare(b, "tr"));
    });

    // Sort technical properties
    Object.keys(options.technicalProperties).forEach((property) => {
      options.technicalProperties[property].sort((a, b) =>
        a.localeCompare(b, "tr")
      );
    });

    return options;
  }, [products]);

  const hasActiveFilters =
    selectedFilters.brand.length > 0 ||
    selectedFilters.category.length > 0 ||
    Object.keys(selectedFilters.technicalDetails).length > 0;

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const clearFilters = () => {
    onFilterChange({
      brand: [],
      category: [],
      technicalDetails: {},
    });
  };

  const handleFilterChange = (type: string, value: string) => {
    const newFilters = { ...selectedFilters };

    if (type === "brand" || type === "category") {
      const index = newFilters[type].indexOf(value);
      if (index === -1) {
        newFilters[type].push(value);
      } else {
        newFilters[type].splice(index, 1);
      }
    } else {
      const [property, propertyValue] = value.split("::");
      if (!newFilters.technicalDetails[property]) {
        newFilters.technicalDetails[property] = [];
      }
      const valueIndex =
        newFilters.technicalDetails[property].indexOf(propertyValue);
      if (valueIndex === -1) {
        newFilters.technicalDetails[property].push(propertyValue);
      } else {
        newFilters.technicalDetails[property].splice(valueIndex, 1);
      }
    }

    onFilterChange(newFilters);
  };

  return (
    <div className="space-y-4 max-h-[calc(100vh-12rem)] overflow-y-auto custom-scrollbar">
      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="flex items-center justify-center w-full px-4 py-2 bg-primary-100 text-primary-600 rounded-md hover:bg-primary-200 transition-colors"
        >
          <X size={16} className="mr-2" />
          Filtreleri Temizle
        </button>
      )}

      {/* Categories Section */}
      <div className="border-b border-gray-200 py-4">
        <button
          onClick={() => toggleSection("categories")}
          className="flex items-center justify-between w-full text-left"
        >
          <h3 className="text-lg font-semibold text-gray-900">Kategoriler</h3>
          {expandedSections.categories ? (
            <ChevronUp size={20} />
          ) : (
            <ChevronDown size={20} />
          )}
        </button>

        {expandedSections.categories && (
          <div className="mt-4 space-y-2">
            {Object.entries(filterOptions.categories)
              .sort(([a], [b]) => a.localeCompare(b, "tr"))
              .map(([parentCategory, subCategories]) => (
                <div key={parentCategory} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="flex items-center font-medium">
                      <input
                        type="checkbox"
                        checked={selectedFilters.category.includes(
                          parentCategory
                        )}
                        onChange={() =>
                          handleFilterChange("category", parentCategory)
                        }
                        className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="ml-2 text-sm text-gray-600">
                        {parentCategory}
                      </span>
                    </label>
                    {subCategories.length > 0 && (
                      <button
                        onClick={() => toggleCategory(parentCategory)}
                        className="p-1 hover:bg-gray-100 rounded-full"
                      >
                        {expandedCategories[parentCategory] ? (
                          <ChevronUp size={16} />
                        ) : (
                          <ChevronDown size={16} />
                        )}
                      </button>
                    )}
                  </div>

                  {expandedCategories[parentCategory] &&
                    subCategories.length > 0 && (
                      <div className="ml-6 space-y-2">
                        {subCategories.map((subCategory) => (
                          <label
                            key={subCategory}
                            className="flex items-center"
                          >
                            <input
                              type="checkbox"
                              checked={selectedFilters.category.includes(
                                subCategory
                              )}
                              onChange={() =>
                                handleFilterChange("category", subCategory)
                              }
                              className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                            />
                            <span className="ml-2 text-sm text-gray-600">
                              {subCategory}
                            </span>
                          </label>
                        ))}
                      </div>
                    )}
                </div>
              ))}
          </div>
        )}
      </div>

      {/* Brands Section */}
      <div className="border-b border-gray-200 py-4">
        <button
          onClick={() => toggleSection("brands")}
          className="flex items-center justify-between w-full text-left"
        >
          <h3 className="text-lg font-semibold text-gray-900">Markalar</h3>
          {expandedSections.brands ? (
            <ChevronUp size={20} />
          ) : (
            <ChevronDown size={20} />
          )}
        </button>

        {expandedSections.brands && (
          <div className="mt-4 space-y-2 max-h-60 overflow-y-auto custom-scrollbar">
            {filterOptions.brands.map((brand) => (
              <label key={brand} className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedFilters.brand.includes(brand)}
                  onChange={() => handleFilterChange("brand", brand)}
                  className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                />
                <span className="ml-2 text-sm text-gray-600">{brand}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Technical Properties Section */}
      <div className="border-b border-gray-200 py-4">
        <button
          onClick={() => toggleSection("technical")}
          className="flex items-center justify-between w-full text-left"
        >
          <h3 className="text-lg font-semibold text-gray-900">
            Teknik Özellikler
          </h3>
          {expandedSections.technical ? (
            <ChevronUp size={20} />
          ) : (
            <ChevronDown size={20} />
          )}
        </button>

        {expandedSections.technical && (
          <div className="mt-4 space-y-4">
            {Object.entries(filterOptions.technicalProperties).map(
              ([property, values]) => (
                <div key={property}>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">
                    {property}
                  </h4>
                  <div className="space-y-2 ml-4">
                    {values.map((value) => (
                      <label key={value} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.technicalDetails[
                            property
                          ]?.includes(value)}
                          onChange={() =>
                            handleFilterChange(
                              "technical",
                              `${property}::${value}`
                            )
                          }
                          className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        />
                        <span className="ml-2 text-sm text-gray-600">
                          {value}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}
