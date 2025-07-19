import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { User } from './user.model';
import { environment } from '../../../environments/environment';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;
  const baseUrl = `${environment.apiUrl}/users`;

  const dummyUser: User = {
    id: 1,
    username: 'admin',
    email: 'admin@example.com',
    role: 'Administrador',
    name: 'Admin'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });

    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('debería obtener todos los usuarios', () => {
    service.getAll().subscribe(users => {
      expect(users.length).toBe(1);
      expect(users[0].username).toBe('admin');
    });

    const req = httpMock.expectOne(baseUrl);
    expect(req.request.method).toBe('GET');
    req.flush([dummyUser]);
  });

  it('debería obtener un usuario por ID', () => {
    service.getById(1).subscribe(user => {
      expect(user.id).toBe(1);
    });

    const req = httpMock.expectOne(`${baseUrl}/1`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyUser);
  });

  it('debería crear un nuevo usuario', () => {
    service.create(dummyUser).subscribe(user => {
      expect(user.id).toBe(1);
    });

    const req = httpMock.expectOne(baseUrl);
    expect(req.request.method).toBe('POST');
    req.flush(dummyUser);
  });

  it('debería actualizar un usuario existente', () => {
    service.update(1, dummyUser).subscribe(user => {
      expect(user.id).toBe(1);
    });

    const req = httpMock.expectOne(`${baseUrl}/1`);
    expect(req.request.method).toBe('PUT');
    req.flush(dummyUser);
  });

    it('debería eliminar un usuario', () => {
    service.delete(1).subscribe(response => {
        expect(response).toBeNull();
    });

    const req = httpMock.expectOne(`${baseUrl}/1`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
    });

});
