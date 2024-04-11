import { View } from "src/app/core/view";
import { BankProduct } from "src/app/models/product-bank.model";

export interface ListProductView extends View {
    value: string;
    listProduct: BankProduct[];
}