import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Feature, Map, View } from 'ol';
import Point from 'ol/geom/Point';
import Tile from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import { transform } from 'ol/proj';
import OSM from 'ol/source/OSM';
import Vector from 'ol/source/Vector';
import Icon from 'ol/style/Icon';
import Style from 'ol/style/Style';
import { SilageHeapWithUrls } from '../../types/interfaces';

@Component({
    selector: 'app-silage-heap-map',
    templateUrl: './silage-heap-map.component.html',
    styleUrls: ['./silage-heap-map.component.css'],
})
export class SilageHeapMapComponent implements OnInit, AfterViewInit {
    @Input() data!: SilageHeapWithUrls;

    @ViewChild('mapContainer') mapContainer: ElementRef<HTMLElement>;

    constructor() {}

    ngOnInit(): void {}

    ngAfterViewInit(): void {
        const [lat, lon] = this.data.silageHeap.gpsLocation.split(',').map(parseFloat);
        const lonLat = transform([lon, lat], 'EPSG:4326', 'EPSG:3857');
        new Map({
            target: this.mapContainer.nativeElement,
            layers: [
                new Tile({
                    source: new OSM(),
                }),
                new VectorLayer({
                    source: new Vector({
                        features: [
                            new Feature({
                                geometry: new Point(lonLat),
                            }),
                        ],
                    }),
                    style: new Style({
                        image: new Icon({
                            src: 'assets/location_on-black-18dp.svg',
                        }),
                    }),
                }),
            ],
            view: new View({
                center: lonLat,
                zoom: 18,
            }),
        });
    }
}
