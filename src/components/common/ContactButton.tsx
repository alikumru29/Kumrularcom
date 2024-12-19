import { Phone, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ContactButtonProps {
  type: "phone" | "email";
  className?: string;
}

export default function ContactButton({
  type,
  className = "",
}: ContactButtonProps) {
  const { t } = useTranslation();

  const config = {
    phone: {
      href: "tel:+902163984764",
      icon: <Phone className="w-5 h-5 mr-2" />,
      text: t("common.buttons.call"),
    },
    email: {
      href: "mailto:info@kumrular.com",
      icon: <Mail className="w-5 h-5 mr-2" />,
      text: t("common.buttons.email"),
    },
  };

  const { href, icon, text } = config[type];

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center px-6 py-3 rounded-full transition-colors ${className}`}
    >
      {icon}
      {text}
    </a>
  );
}
