from django.http import JsonResponse


def send_fruits(request):
    fruits = [
        {"name": "apple", "weight": 0.1, "color": "red"},
        {"name": "mango", "weight": 0.4, "color": "green"},
        {"name": "strawberry", "weight": 0.02, "color": "red"},
        {"name": "banana", "weight": 0.1, "color": "red"},
        {"name": "blueberry", "weight": 0.002, "color": "purple"},
    ]

    return JsonResponse(fruits, safe=False)
