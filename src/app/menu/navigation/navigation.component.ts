import {Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";
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

    ngOnInit() {
        this.navigation = [
            {
                label: 'Spezialitäten',
                routerLink: "categories",
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
                                    disabled: true
                                },
                                {
                                    label: 'Gemüse',
                                    disabled: true
                                },
                                {
                                    label: 'Saucen',
                                    disabled: true
                                }
                            ]
                        },
                        {
                            label: 'Wein',
                            items: [
                                {
                                    label: 'Rotwein',
                                    disabled: true
                                },
                                {
                                    label: 'Weißwein',
                                    disabled: true
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
                label: "Protigisische Heimat",
                items: [
                    [
                        {
                            label: "Vegetarisch",
                            items: [
                                {
                                    label: "Vegetarisch-1",
                                    disabled: true
                                },
                                {
                                    label: "Vegetarisch-2",
                                    disabled: true
                                },
                                {
                                    label: "Vegetarisch-3",
                                    disabled: true
                                },
                                {
                                    label: "Vegetarisch-4",
                                    disabled: true
                                }
                            ]
                        },
                        {
                            label: "Fleisch",
                            disabled: true
                        },
                        {
                            label: "Fisch",
                            disabled: true
                        },
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
            },
            {
                label: ""
            }

        ];
    }

}
