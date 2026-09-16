import type { ImageAsset } from "@/config/images";
import { images } from "@/config/images";
import type { PlansPhotoKey } from "@/content/plans";

/**
 * /plans/ の写真の対応表。
 *
 * src/content/plans.ts では写真を「キー（文字列）」で指定しています。
 * 実際の画像ファイルとの対応づけは、この1ファイルだけで行います。
 * 写真を差し替えるときは、まず src/config/images.ts を見てください。
 *
 * ⚠ 三津浜の宿（1週間プランの滞在先）の写真は**素材がありません**。
 *   今市シェアハウス（house 6枚）を三津浜の写真として使うことはできません。
 *   写真が届くまでは、三津浜の宿は文字だけで書きます
 *   （docs/pending-facts.md の C-1）。
 */
export const plansPhotos: Record<PlansPhotoKey, ImageAsset> = {
  /** 今市シェアハウス（images.house の並び順に対応） */
  houseRoom: images.house[0], // 個室
  houseKitchen: images.house[1], // 共用キッチン
  houseWash: images.house[2], // 洗面・洗濯
  houseCorridor: images.house[3], // 廊下
  houseExterior: images.house[4], // 外観
  houseEntrance: images.house[5], // 玄関

  /** そのほか */
  workDesk: images.dayWork, // 窓際に机を置いた部屋
  field: images.aboutField, // 耕したばかりの畑と集落
  morningField: images.dayMorning, // 朝の畑での作業
};
