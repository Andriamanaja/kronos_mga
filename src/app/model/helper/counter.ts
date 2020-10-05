import { Observable, of } from 'rxjs';
import { LoadingController } from '@ionic/angular';

export class Counter{
    public static value : number = 0 ;
    public static data_length : number = 0 ;
    public static show : boolean = false ;
    private static loading : any ;
    public static loadingController : any ;

    constructor() {}

    public static async presentLoading():Promise<void> {
        this.loadingController = document.querySelector('ion-loading-controller');
        Counter.loading = await this.loadingController.create({
            message : 'Veuillez patienter',
        });

        await this.loading.present();
    }

    public static async disableLoading():Promise<void>{
        if(this.loading){
            await Counter.loading.dismiss();
        }
    }

}