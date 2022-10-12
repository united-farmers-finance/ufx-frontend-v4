import { useTranslation } from '@unitedfarmers/localization'
import { Text } from '@unitedfarmers/uikit'

const RugPullWarning = () => {
  const { t } = useTranslation()

  return (
    <>
      <Text>{t('Suspicious rugpull token')}</Text>
    </>
  )
}

export default RugPullWarning
