// Контроллер fetch запросов
let controller = new AbortController()

export const getControllerSignal = () => controller.signal

export const abortController = () => controller.abort()

export const reinitController = () => {
  controller = new AbortController()
}

// Контроллер промиса повторных запросов
let sleepController = new AbortController()

export const getSleepSignal = () => sleepController.signal

export const abortSleep = () => sleepController.abort()

export const reinitSleep = () => {
  sleepController = new AbortController()
}