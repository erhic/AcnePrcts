import  {Component}from '@angular/core'

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',


})

export class ProductListComponent{
  pageTitle:string = 'Product List';
  imageWidth: number = 40;
  imageMargin: number =2;
  showImage:boolean=false;
 products:any[] =[

  {
    'productId':2,
    'productName': 'Garden Cart',
    'productCode': 'GDN-0023',
    'releaseDate': 'March 18, 2021',
    'description':'15 gallons capacity rolling',
    'price': 23.43,
    'starRating':4.2,
    'imageUrl':'assets/images/garden_cart.jpeg'
  },
  {
    'productId':5,
    'productName': 'Hammer',
    'productCode': 'GDN-004389',
    'releaseDate': 'June 18, 2023',
    'description':'Steel Curved hammer',
    'price': 6.43,
    'starRating':4.8,
    'imageUrl':'assets/images/hammer.jpeg'
  }
 ];

 // write after properties
toogleImage():void{
this.showImage = !this.showImage  // this method changes the boolean value  of showImage to true and now you can be able to view the images because the *ngIf condition has beeen set to true , hence display element.
 };

}