import { ElementRef, CommonElement } from '@src/types/ElementRef'
import { onCleanup } from 'solid-js'

/**
 * @example
 *
 * ```ts
 * const TextInput = () => {
 *  const ref = createElmRef<HTMLInputElement>()
 *
 *  console.log(ref.current) // => null
 *
 *  onMounted(() => {
 *    console.log(ref.current) // => HTMLInputElement
 *  })
 *
 *  return <input ref={ref} />
 * }
 * ```
 *
 * @description
 * A syntax sugar to help using refs in solid and work well with other hooks.
 *
 * @category Primitive
 */
export function createElmRef<
  T extends CommonElement = CommonElement,
>(): ElementRef<T> {
  const ref: ElementRef<T> = (elm: T) => {
    ref.current = elm
  }
  ref.current = null
  // TODO: Should we reset to null when cleaning up?
  onCleanup(() => (ref.current = null))
  return ref
}
