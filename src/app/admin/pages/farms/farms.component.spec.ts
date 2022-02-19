import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ConfigService } from 'src/app/services/config.service';
import { ToolbarService } from 'src/app/services/toolbar.service';
import { FarmsComponent } from './farms.component';

describe('FarmsComponent', () => {
    let component: FarmsComponent;
    let fixture: ComponentFixture<FarmsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, RouterTestingModule],
            declarations: [FarmsComponent],
            providers: [ConfigService, ToolbarService],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FarmsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
