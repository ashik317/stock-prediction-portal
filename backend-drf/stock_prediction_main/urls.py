from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    # Base Api urls
    path('api/v1/', include('accounts.urls')),
]
