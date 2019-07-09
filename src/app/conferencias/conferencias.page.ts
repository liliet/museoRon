import { Component, OnInit } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';
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
    private fileNavigator: File,
    private platform: Platform,
    private fileOpener: FileOpener
  ) {
    const basePath = 'assets/conferencias/';
    this.files = [
      { file: `${basePath}Conferencia de la Dra Olga Portuondo.doc`, ext: 'doc', name: 'Conferencia de la Dra Olga Portuondo' },
      { file: `${basePath}Don Arturo (doc prensa).pdf`, ext: 'pdf', name: 'Don Arturo (doc prensa)' },
      { file: `${basePath}Clinical_Training_BBC.pptx`, ext: 'pptx', name: 'Clinical_Training_BBC' }
    ];
  }

  handleError(error: any) {
    console.log('Ha ocurrido un error: ', error);
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  ngOnInit() {
    this.platform.ready()
      .then((readySource) => {
        console.log(`Platform ready: ${readySource}`);
        console.log(this.fileNavigator);
        /* const basePath = `${(this.fileNavigator.applicationDirectory == null) ? '' : this.fileNavigator.applicationDirectory}www/assets/conferencias`;
        console.log(basePath);
        (window as any).resolveLocalFileSystemURL(basePath,
          (fileSystem: DirectoryEntry) => {
            console.log(fileSystem);
            const reader = fileSystem.createReader();
            reader.readEntries(
              (entries) => {
                console.log(entries);
                let fileExt = '';
                entries.forEach(entry => {
                  fileExt = entry.name.split('.').reverse[0];
                  this.files.push({ file: entry.name, ext: fileExt.toLowerCase() });
                });
              },
              this.handleError);
          } ,
        this.handleError ); */

        /* this.fileNavigator.listDir(basePath, '')
          .then(entries => {
            console.log(entries);
            let fileExt = '';
            entries.forEach(entry => {
              fileExt = entry.name.split('.').reverse[0];
              this.files.push({ file: entry.name, ext: fileExt.toLowerCase() });
            });
          })
          .catch(this.handleError); */
      })
      .catch(this.handleError);
  }

  open(file: string, ext: string) {
    const mimeType = this.MIMETypes[ext];
    this.fileOpener.open(file, mimeType)
      .then(() => console.log('Archivo abierto'))
      .catch(ex => console.log('Error abriendo archivo', ex));
  }

}
