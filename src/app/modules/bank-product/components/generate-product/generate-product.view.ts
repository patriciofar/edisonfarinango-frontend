import { View } from "src/app/core/view";
import { BankProduct } from "src/app/models/product-bank.model";

export interface GenerateProductView extends View {
    value: string;
    bankProduct: BankProduct;
}