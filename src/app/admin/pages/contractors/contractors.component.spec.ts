import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ConfigService } from 'src/app/services/config.service';
import { ToolbarService } from 'src/app/services/toolbar.service';
import { ContractorsComponent } from './contractors.component';

describe('ContractorsComponent', () => {
    let component: ContractorsComponent;
    let fixture: ComponentFixture<ContractorsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule, HttpClientTestingModule],
            declarations: [ContractorsComponent],
            providers: [ConfigService, ToolbarService],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ContractorsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
