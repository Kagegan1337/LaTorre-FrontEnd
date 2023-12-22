import {Component} from '@angular/core';
import {Router, RouterOutlet} from "@angular/router";
import {MegaMenuModule} from "primeng/megamenu";
import {MegaMenuItem} from "primeng/api";
import {InputMaskModule} from "primeng/inputmask";
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {routes} from "../../app.routes";
import {query} from "@angular/animations";

@Component({
    selector: 'app-navigation',
    standalone: true,
    imports: [
        RouterOutlet,
        MegaMenuModule,
        InputMaskModule,
        FormsModule,
        ButtonModule
    ],
    templateUrl: './navigation.component.html',
    styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

    navigation: MegaMenuItem[] | undefined;

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.navigation = [
            {
                label: 'Spezialitäten',
                items: [
                    [
                        {
                            label: 'Lebensmittel',
                            items: [
                                {
                                    label: 'Fleisch',
                                    routerLink: 'articles',
                                    queryParams: ['meat']
                                },
                                {
                                    label: 'Fisch',
                                    routerLink: 'articles',
                                    queryParams: ['sea']
                                },
                                {
                                    label: 'Gemüse',
                                    routerLink: 'articles',
                                    queryParams: ['veggi']
                                },
                                {
                                    label: 'Saucen',
                                    routerLink: 'articles',
                                    queryParams: ['souce']
                                },
                                {
                                    label: 'Tiefkühl',
                                    routerLink: 'articles',
                                    queryParams: ['frozen']
                                },

                            ]
                        },
                        {
                            label: 'Wein',
                            items: [
                                {
                                    label: 'Rotwein',
                                    routerLink: 'articles',
                                    queryParams: ['wine', 'red']
                                },
                                {
                                    label: 'Weißwein',
                                    routerLink: 'articles',
                                    queryParams: ['wine', 'white']
                                }
                            ]
                        },
                    ],
                    [
                        {
                            label: 'Spirituosen',
                            items: [
                                {
                                    label: '1',
                                    disabled: true
                                },
                                {
                                    label: '2',
                                    disabled: true
                                }
                            ]
                        },
                        {
                            label: 'Geschirr & Zubehör',
                            items: [
                                {
                                    label: 'Besteck',
                                    disabled: true
                                },
                                {
                                    label: 'Küche',
                                    disabled: true
                                },
                                {
                                    label: 'Porzelan',
                                    disabled: true
                                }
                            ]
                        }
                    ],
                ]
            },
            {
                label: "Cozinha Portuguesa",
                items: [
                    [
                        {
                            label: "Rezepte",
                            items: [
                                {
                                    label: "Fleisch",
                                    routerLink: 'recipe',
                                    queryParams: ['meat']
                                },
                                {
                                    label: "Fisch",
                                    disabled: true
                                },
                                {
                                    label: "Fisch",
                                    disabled: true
                                },
                                {
                                    label: "Vegetarisch",
                                    disabled: true
                                }
                            ]
                        }
                    ],
                    [
                        {
                            label: "Wein",
                            disabled: true
                        },
                        {
                            label: "Spirituosen",
                            disabled: true
                        }
                    ]
                ]
            },
            {
                label: "La Torre",
                items: [
                    [
                        {
                            label: "",
                            items: [
                                {
                                    label: "Über uns"
                                },
                                {
                                    label: "Geschichte"
                                },
                                {
                                    label: "Impressum"
                                },
                                {
                                    label: "Datenschutz"
                                }
                            ]
                        }
                    ]
                ]
            }

        ];
    }

    loadMain() {
        this.router.navigate([''])
    }
}
