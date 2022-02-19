import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToolbarService } from 'src/app/services/toolbar.service';
import { CreateContractorComponent } from './create-contractor.component';

describe('CreateContractorComponent', () => {
    let component: CreateContractorComponent;
    let fixture: ComponentFixture<CreateContractorComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, RouterTestingModule],
            declarations: [CreateContractorComponent],
            providers: [ToolbarService],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CreateContractorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
