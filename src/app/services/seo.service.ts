import { Injectable, inject } from '@angular/core';
import { TitleStrategy, RouterStateSnapshot } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class AppTitleStrategy extends TitleStrategy {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  override updateTitle(routerState: RouterStateSnapshot): void {
    const title = this.buildTitle(routerState);
    const root = routerState.root;
    let child = root;
    
    // Iterate down the tree to get the deepest activated route's data
    while (child.firstChild) {
      child = child.firstChild;
    }
    
    const description = child.data['description'] || 'Empresa especializada em engenharia civil e topografia. Reduza custos e obtenha alta precisão com tecnologias inovadoras.';

    // Set the Page Title dynamically
    if (title) {
      this.title.setTitle(`Geometric | ${title}`);
    } else {
      this.title.setTitle(`Geometric | Projetos de Engenharia e Topografia`);
    }

    // Set the Meta Description dynamically
    this.meta.updateTag({ name: 'description', content: description });
  }
}
