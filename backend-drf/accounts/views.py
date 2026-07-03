from rest_framework.permissions import AllowAny
from rest_framework.generics import ListCreateAPIView
from .serializers import UserSerializer
from django.contrib.auth.models import User

class UserListCreateApiView(ListCreateAPIView):
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return User.objects.all()