export interface ProductDetails{
    id:number;
    name:string;
    description :string; 
    img:string;
    majorDescription:string;
    slides:Array<string>[];
    parentId:number
}