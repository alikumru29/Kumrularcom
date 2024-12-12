import { useCallback } from 'react';
import tr from '../i18n/tr';

type NestedKeyOf<T> = T extends object
  ? {
      [K in keyof T]: K extends string
        ? T[K] extends object
          ? `${K}.${NestedKeyOf<T[K]>}`
          : K
        : never;
    }[keyof T]
  : never;

export function useTranslation() {
  const t = useCallback((key: NestedKeyOf<typeof tr>) => {
    const keys = key.split('.');
    let value: any = tr;
    
    for (const k of keys) {
      value = value[k];
      if (value === undefined) return key;
    }
    
    return value;
  }, []);

  return { t };
}