/** クラス名を安全に連結する小さなヘルパー（false / undefined は無視されます） */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
