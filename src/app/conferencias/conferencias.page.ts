import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'sp-conferencias',
  templateUrl: './conferencias.page.html',
  styleUrls: ['./conferencias.page.scss'],
})
export class ConferenciasPage implements OnInit {

  MIMETypes = {
    txt: 'text/plain',
    docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    doc: 'application/msword',
    pdf: 'application/pdf',
    jpg: 'image/jpeg',
    bmp: 'image/bmp',
    png: 'image/png',
    xls: 'application/vnd.ms-excel',
    xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    rtf: 'application/rtf',
    ppt: 'application/vnd.ms-powerpoint',
    pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
  };
  buttons = {
    txt: '/assets/conf_pdf.png',
    docx: '/assets/conf_w.png',
    doc: '/assets/conf_w.png',
    pdf: '/assets/conf_pdf.png',
    jpg: '/assets/conf_pdf.png',
    bmp: '/assets/conf_pdf.png',
    png: '/assets/conf_pdf.png',
    xls: '/assets/conf_pdf.png',
    xlsx: '/assets/conf_pdf.png',
    rtf: '/assets/conf_pdf.png',
    ppt: '/assets/conf_ppt.png',
    pptx: '/assets/conf_ppt.png'
  };
  files = [];

  constructor(
    private menuCtrl: MenuController,
    private file: File,
    private fileOpener: FileOpener
  ) {
    this.files = [
      { file: `Conferencia de la Dra Olga Portuondo.pdf`, ext: 'pdf', name: 'Conferencia de la Dra Olga Portuondo' },
      { file: `Don Arturo (doc prensa).pdf`, ext: 'pdf', name: 'Don Arturo (doc prensa)' },
      { file: `Acerca de los maestros roneros.pdf`, ext: 'pdf', name: 'Acerca de los maestros roneros del lado oscuro de la luna' },
      { file: `El ingenio del mambí.pdf`, ext: 'pdf', name: 'El ingenio del mambí' },
      { file: `Historia y procesos sobre el  ron.pdf`, ext: 'pdf', name: 'Historia y procesos sobre el  ron' }
    ];
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  ngOnInit() {
  }

  open(file: string, ext: string) {
    const basePath = this.file.applicationDirectory + 'www/assets/conferencias/';
    const mimeType = this.MIMETypes[ext];
    this.file.checkFile(this.file.dataDirectory, file)
      .then(exits => {
        if (!exits) {
          this.file.copyFile(basePath, file, this.file.dataDirectory, file)
            .then(entry => {
              this.fileOpener.open(entry.nativeURL, mimeType)
                .then(() => console.log('Archivo abierto'))
                .catch(ex => console.log('Error abriendo archivo', ex));
            })
            .catch(ex => console.log('Error copiando archivo', ex));
        } else {
            this.fileOpener.open(this.file.dataDirectory + file, mimeType)
            .then(() => console.log('Archivo abierto'))
            .catch(ex => console.log('Error abriendo archivo', ex));
        }
      })
      .catch(ex => console.log('Ha ocurrido un error', ex));
  }

}
