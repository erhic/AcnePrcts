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
  listFilter:string='cart'
 products:any[] =[

  {
    'productId':2,
    'productName': 'Garden Cart',
    'productCode': 'GDN-0023',
    'releaseDate': 'March 18, 2021',
    'description':'15 gallons capacity rolling',
    'price': 23.43,
    'starRating':4.2,
    'imageUrl':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkoJG_V97J8aITpUMOakjLwTOz3ZfKrLDohDfsWqvWxw&s'
  },
  {
    'productId':5,
    'productName': 'Hammer',
    'productCode': 'GDN-004389',
    'releaseDate': 'June 18, 2023',
    'description':'Steel Curved hammer',
    'price': 6.43,
    'starRating':4.8,
    'imageUrl':'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Claw-hammer.jpg/1024px-Claw-hammer.jpg'
  }
 ];

 // write after properties
toogleImage():void{
this.showImage = !this.showImage  // this method changes the boolean value  of showImage to true and now you can be able to view the images because the *ngIf condition has beeen set to true , hence display element.
 };

}