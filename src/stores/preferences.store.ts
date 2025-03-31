import { create } from 'zustand'

type TypePreferencesStore = {
  language: 'ru' | 'en',
  switchLanguage: () => void
}

export const usePreferences = create<TypePreferencesStore>()(set => ({
  language: 'ru',
  switchLanguage: () => set(({ language }) => {
    let _language: 'ru' | 'en' = 'ru'
    if (language === 'ru') _language = 'en'
    else _language = 'ru'
    return { language: _language }
  })
}))