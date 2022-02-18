import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToolbarService } from 'src/app/services/toolbar.service';
import { CreateFarmComponent } from './create-farm.component';

describe('CreateFarmComponent', () => {
    let component: CreateFarmComponent;
    let fixture: ComponentFixture<CreateFarmComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, RouterTestingModule],
            declarations: [CreateFarmComponent],
            providers: [ToolbarService],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CreateFarmComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
