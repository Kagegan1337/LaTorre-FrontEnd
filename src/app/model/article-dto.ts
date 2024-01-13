export interface ArticleDto {
    articleId: number;
    names : TranslationDto[];
    description: TranslationDto[];
    images: ImagesDto[];
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
