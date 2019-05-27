import { MainCategory } from './mainCategory.model';
import { KeyWord } from './keywordDetail.model';

export class Category {
    categoryName: string;
    categoryDescription: string;
    categoryImageName: string;
    keyWord: [KeyWord];
    mainCategory:[MainCategory];
}
