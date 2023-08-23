import { useTranslation } from 'react-i18next';
import * as SC from './LanfSwitcher.styled';

function LangSwitcher() {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ua' : 'en');
  };

  return (
    <>
      <SC.Button onClick={toggle}>{t('language')}</SC.Button>
    </>
  );
}

export default LangSwitcher;
