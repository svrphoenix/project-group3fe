import { useTranslation } from 'react-i18next';

function LangSwitcher() {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ua' : 'en');
  };

  return (
    <>
      <button onClick={toggle}>{t('language')}</button>
    </>
  );
}

export default LangSwitcher;
