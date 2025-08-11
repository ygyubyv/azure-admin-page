import { ref } from "vue";
import { useI18n } from "vue-i18n";

export const useLocal = () => {
  const { availableLocales, locale } = useI18n();

  const selectIsOpen = ref(false);
  const selectedLocale = ref(locale.value);

  const selectLocale = (l: string) => {
    localStorage.setItem("locale", l);
    selectedLocale.value = l;
    locale.value = l;
    selectIsOpen.value = false;
  };

  const localeNameToUpperCase = (l: string) =>
    l.charAt(0).toUpperCase() + l.slice(1);

  return {
    selectIsOpen,
    selectedLocale,
    availableLocales,
    selectLocale,
    localeNameToUpperCase,
  };
};
