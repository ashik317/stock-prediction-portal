from django.urls import path
from .views import UserListCreateApiView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path(
        'register/', 
        UserListCreateApiView.as_view(), 
        name='user-list-create'
    ),
    path(
        'token/', 
        TokenObtainPairView.as_view(), 
        name='token_obtain_pair'
    ),
    path(
        'token/refresh/', 
        TokenRefreshView.as_view(), 
        name='token_refresh'
    ),
]