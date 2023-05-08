import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDocumentContainerComponent } from './upload-document-container.component';

describe('UploadDocumentContainerComponent', () => {
  let component: UploadDocumentContainerComponent;
  let fixture: ComponentFixture<UploadDocumentContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadDocumentContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadDocumentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
