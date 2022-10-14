# Serverless_test_project

Ha esetleg valaki ihletet merítene belőle. Biztos van szebb, jobb, egyszerűbb. 0 AWS és serverless tapasztalattal egyelőre ezt sikerült összehegeszteni. Amit kell azt megcsinálja, de nem érdemes készpénznek venni, könnyen lehet, hogy több sebből is vérzik. A munka nagyrészét elvégzi az AWS SAM, arra tökéletes, hogy lássa az ember, hogy hogyan is áll össze egy nagyon egyszerű serverless backend. A frontendnek nincs más feladata, mint a kapott url-t megpingelje és ezáltal triggereli a lambda függvényt. Az S3 bucket sincs túl gondolva, egy-két korlátozást kell kikapcsolni hogy elérhető legyen az összecsomagolt Angular app.

Hasznos oldalak: 
https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-getting-started-hello-world.html
AWS SAM: Serverless Application Modell: gyakorlatilag add kezdő S3, ApiGateway és Lambda pakkot. Ki lehet választani a Runtime-ot, a regiont, mi legyen a cloudformation stack neve stb. A sam init-el indul, majd, ha megvan a kezdő folder akkor a sam build felépíti és a sam deploy –guided pedig felküldi a felhőbe.

https://levelup.gitconnected.com/learn-how-to-create-and-deploy-the-angular-application-to-aws-serverless-s3-81f8a838b563
Angular felrakása az S3 bucketbe. Ez nincsen különösebben megbonyolítva, kell egy Angular CLI valamint egy Angular projekt. Az ng build -prod helyett ng build – production configuration kell(ha jól emlékszem😊) a többi része a cikknek könnyen követhető.
https://github.com/aws/aws-sam-cli/issues/2045

Csak S3 bucket-e önmagában törölni nem elég, ha esetleg valami nem menne és elölről kezdenéd a folyamatot. Az egész cloudformation stack-et törölni kell, más különben a SAM keresni fogja a bucket-et,ahelyett hogy újat hozna létre.
https://community.alteryx.com/t5/Alteryx-Designer-Discussions/s3-download-Error-from-AWS-the-Object-was-stored-using-a-form-of/td-p/594865

Ez valószínűleg nem egy jó eljárás, de máshogy nem tudtam megoldani azt hogy 400-as bad request error-t dobott sokáig és végül az encryption disable-je lett a megoldás.
https://stackoverflow.com/questions/72827644/aws-serverless-application-model-init-error-on-pycharm 

Ha esetleg a windows nem engedné hogy klónozd a repot a sam initnél mert túl hosszú fájl név..
Tippek: 
Cors beállítás:
Ahhoz, hogy egy get request-el triggereljük a lambda függvényt, ahhoz megfelelő cors beállítások kellenek, amire egyrészt szükség van magában a lambda függvényben:
headers: {
                "Access-Control-Allow-Headers" : "Content-Type",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST,GET"            },

Másrészt pedig kell egy cors policy-t is beállítani az S3 bucket permissionsnél is:
[   { "AllowedHeaders": [     "*"  ],
        "AllowedMethods": [     "GET",   "POST"
        ],  "AllowedOrigins": [   "*"  ],  "ExposeHeaders": []  }, {
        "AllowedHeaders": [         "*"   ],
        "AllowedMethods": [    "GET",    "POST”   ],
        "AllowedOrigins": [  "*"
        ],    "ExposeHeaders": []   },    {   "AllowedHeaders": [],  "AllowedMethods": [   "GET"   ],  "AllowedOrigins": [     "*"  ], "ExposeHeaders": [] }]
