from django.urls import path
from .views import UserListCreateApiView

urlpatterns = [
    path(
        'register/', 
        UserListCreateApiView.as_view(), 
        name='user-list-create'
    ),
]
