import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ConfigService } from 'src/app/services/config.service';
import { EditFarmComponent } from './edit-farm.component';

describe('EditFarmComponent', () => {
    let component: EditFarmComponent;
    let fixture: ComponentFixture<EditFarmComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, RouterTestingModule],
            declarations: [EditFarmComponent],
            providers: [ConfigService],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(EditFarmComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
