import { Component, inject } from '@angular/core';
import { FormBuilder, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Product } from 'src/app/core/models/Product';
import { ProductService } from '../../services';
import { NotificationService } from 'src/app/shared/service/notification';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent {

  private formBuilder = inject(NonNullableFormBuilder);
  private prodService = inject(ProductService);
  protected notificationService = inject(NotificationService);
  protected form = this.buildForm();
  private product!: Product;

  constructor(){}

  private buildForm() {
    return this.formBuilder.group({
      codProd: [null],
      nomeProd: ['', [Validators.required, Validators.minLength(3)]],
      descricaoProd: [''],
      precoProd: ['', Validators.required]
    });
  }

  private createOrUpdateProductPayLoad(): Product{
    const formValue = this.form.getRawValue();
    return{
      codProd: this.product?.codProd,
      nomeProd: formValue.nomeProd,
      descricaoProd: formValue.descricaoProd,
      precoProd:Number(formValue.precoProd)

      // codProd: this.product?.codProd,
      // nomeProd: this.product.nomeProd,
      // descricaoProd: this.product.descricaoProd,
      // precoProd: this.product.precoProd,
    };
  }

  private createProduct(): void{
    const body = this.createOrUpdateProductPayLoad();
    this.prodService.create(body).subscribe({
      next:(res) => {
        this.notificationService.showMessageSucess('Produto salvo com sucesso!');
        console.log(res);
        setTimeout(() => {
          window.location.reload(); // Recarregue a página após 2 segundos
        }, 2000);
      },
      error: (err) => {
        this.notificationService.showMessageFail(
          'Ocorreu um erro ao salvar as informações do produto.'
        );
        console.log(err);
      },
    })
  }

  public onSubmit(){
    console.log(this.form.value);
    if (this.form.invalid) {
      this.notificationService.showMessageFail(
        'Preencha todos os campos corretamente!'
      );
      return; //Quebra a função e não executa mais nada.
    }

    if (this.product) {
      console.log('Edita ai, para atualizar');
      return;
    }
    this.createProduct();
  }

}
