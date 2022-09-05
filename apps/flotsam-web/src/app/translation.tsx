import { useTranslation } from 'react-i18next';

export function TranslatedComponent () {
  const { t } = useTranslation();
  return <h1>{t('Welcome to React')}</h1>
}
