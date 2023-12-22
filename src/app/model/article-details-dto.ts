export interface ArticleDetailsDto {

    name:string;
    prices: PricePerTypeDto[]
    description: string;
    imageUrls: string[];

}

export interface PricePerTypeDto {
    type: string;
    price: number;
}
