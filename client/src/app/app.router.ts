import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './shared/guards/auth.guard';
import { HomeComponent } from './core/components/home/home.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    {
        path: 'admin',
        loadChildren: 'app/admin/admin.module#AdminModule',
        canLoad: [AuthGuard]
    },
    {
        path: 'manager',
        loadChildren: 'app/manager/manager.module#ManagerModule',
        canLoad: [AuthGuard]
    },
    {
        path: 'employee',
        loadChildren: 'app/employee/employee.module#EmployeeModule',
        canLoad: [AuthGuard]
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const AppRouter = RouterModule.forRoot(routes);