import { create } from 'zustand'

type TypeActiveTopic = 'work' | 'life'

type TypeTopicStore = {
  currentTopic: TypeActiveTopic,
  isWorkBlockVisible?: boolean,
  isLifeBlockVisible?: boolean,
  switchTopic: () => void,
  switchTopicsVisibility: () => void
}

export const useTopicsSettings = create<TypeTopicStore>()((set, get) => ({
  currentTopic: 'work',
  isWorkBlockVisible: true,
  isLifeBlockVisible: false,
  switchTopic: () => set(({ currentTopic }) => {
    let newActiveTopic: TypeActiveTopic = 'life'
    if (currentTopic === 'life') newActiveTopic = 'work'
    setTimeout(get().switchTopicsVisibility, 500)
    return { currentTopic: newActiveTopic }
  }),
  switchTopicsVisibility: () => set(({ currentTopic, isWorkBlockVisible, isLifeBlockVisible }) => {
    return {
      currentTopic: currentTopic,
      isWorkBlockVisible: isLifeBlockVisible,
      isLifeBlockVisible: isWorkBlockVisible
    }
  })
}))