export interface ArticleDto {
    articleId: number;
    name: string;
    description: string;
    category: string;
    subCategory: string;
    thumbnail:string;
}

export interface ArticleDetailsDto{

    pooling: PoolingDto[];
}

export interface TranslationDto {
    translation: string;
    isoCode: string;
}
export interface ImagesDto {
    name: string;
    path: string;
}
export interface PoolingDto {
    translation: TranslationDto;
    price: number;
}
