import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { AngularEditorConfig } from '@kolkov/angular-editor';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'summernote3';


  form:FormGroup;
  constructor( 
    private fb:FormBuilder
  ){
    this.form = fb.group({
      html:['<div style="text-align: center;"><div class="mw-heading mw-heading3" style="text-align: center; font-weight: bold; margin: 0.25em 0px; padding-top: 0.5em; padding-bottom: 0px; overflow: hidden; font-size: 1.2em; line-height: 1.6; font-family: sans-serif; background-color: rgb(255, 255, 255);"><h3 id="Distinción_legal" style="margin: 0px 0px 0.25em; padding: 0px; overflow: hidden; font-size: inherit; display: inline; border: 0px; font-style: inherit; font-variant: inherit; font-stretch: inherit; line-height: 1.6; font-family: inherit; font-optical-sizing: inherit; font-size-adjust: inherit; font-kerning: inherit; font-feature-settings: inherit; font-variation-settings: inherit;"><font color="#1a49d5">Distinción legal</font></h3></div><p style="text-align: justify; margin: 0.5em 0px 1em; color: rgb(32, 33, 34); font-family: sans-serif; font-size: 16px;"><span class="quote" style="background-color: rgb(198, 36, 36);">Una primera distinción, por ejemplo, es legal: la que existe entre la&nbsp;biografía autorizada&nbsp;(sometida a la supervisión y&nbsp;censura&nbsp;del personaje cuya vida expone), y la&nbsp;biografía no autorizada&nbsp;(escrita con libertad por su autor y frecuentemente contra los deseos del biografiado). La biografía autorizada suele estar compuesta por un&nbsp;ghost writer&nbsp;o "escritor fantasma", por lo general un periodista, cuando el personaje biografiado no dispone de tiempo o de la habilidad de redactar sus propias memorias, para lo cual aquel se inspira en conversaciones con el personaje, en cintas magnetofónicas (magnetófono) grabadas con él o en un borrador o documentos suministrados por él, a los que da forma de relato en primera persona y, más raramente, en tercera. Por otra parte, el biógrafo más autorizado, objetivo e imparcial es siempre un historiador profesional.</span><br></p></div>']
    })
  }


editorConfig: AngularEditorConfig = {
  editable: true,
  spellcheck: true,
  height: 'auto',
  minHeight: '0',
  maxHeight: 'auto',
  width: 'auto',
  minWidth: '0',
  translate: 'yes',
  enableToolbar: true,
  showToolbar: true,
  placeholder: 'Enter text here...',
  defaultParagraphSeparator: '',
  defaultFontName: '',
  defaultFontSize: '',
  fonts: [
    {class: 'arial', name: 'Arial'},
    {class: 'times-new-roman', name: 'Times New Roman'},
    {class: 'calibri', name: 'Calibri'},
    {class: 'comic-sans-ms', name: 'Comic Sans MS'}
  ],
  customClasses: [
  {
    name: 'quote',
    class: 'quote',
  },
  {
    name: 'redText',
    class: 'redText'
  },
  {
    name: 'titleText',
    class: 'titleText',
    tag: 'h1',
  },
],
    // editable: true,
    //   spellcheck: true,
    //   height: 'auto',
    //   minHeight: '0',
    //   maxHeight: 'auto',
    //   width: 'auto',
    //   minWidth: '0',
    //   translate: 'yes',
    //   enableToolbar: true,
    //   showToolbar: true,
    //   placeholder: 'Enter text here...',
    //   defaultParagraphSeparator: '',
    //   defaultFontName: '',
    //   defaultFontSize: '',
    //   fonts: [
    //     {class: 'arial', name: 'Arial'},
    //     {class: 'times-new-roman', name: 'Times New Roman'},
    //     {class: 'calibri', name: 'Calibri'},
    //     {class: 'comic-sans-ms', name: 'Comic Sans MS'}
    //   ],
    //   customClasses: [
    //   {
    //     name: 'quote',
    //     class: 'quote',
    //   },
    //   {
    //     name: 'redText',
    //     class: 'redText'
    //   },
    //   {
    //     name: 'titleText',
    //     class: 'titleText',
    //     tag: 'h1',
    //   },
    // ],
    uploadUrl: 'v1/image',
    // upload: (file: File) => { 
    //   // Upload logic here
    // },
    uploadWithCredentials: false,
    sanitize: false, // mantener estilos
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
};

}
