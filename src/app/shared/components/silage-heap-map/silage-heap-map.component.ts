import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { SilageHeap, SilageHeapWithUrls } from '../../types/interfaces';
import { Feature, Map, View } from 'ol';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat, ProjectionLike, transform } from 'ol/proj';
import Point from 'ol/geom/Point';
import Vector from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import Layer from 'ol/layer/Layer';

@Component({
    selector: 'app-silage-heap-map',
    templateUrl: './silage-heap-map.component.html',
    styleUrls: ['./silage-heap-map.component.css'],
})
export class SilageHeapMapComponent implements OnInit, AfterViewInit {
    constructor() {}

    @Input() data!: SilageHeapWithUrls;

    @ViewChild('mapContainer') mapContainer: ElementRef<HTMLElement>;

    ngOnInit(): void {}

    ngAfterViewInit() {
        const [lat, lon] = this.data.silageHeap.gpsLocation.split(',').map(parseFloat);
        const lonLat = transform([lon, lat], 'EPSG:4326', 'EPSG:3857');
        const map = new Map({
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
