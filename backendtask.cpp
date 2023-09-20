// first task
int a, b, c;
a = scanf("%d", &a);
b = scanf("%d", &b);
a = c;
a = b;
b = c;
printf("%d,%d", &a, &b);

//----------------------------

int a, b, sum;
a = scanf("%d", &a);
b = scanf("%d", &b);
sum = a + b;
printf("%d,", &sum);

//----------------------------------

int a, b, sum;
a = scanf("%d", &a);
b = scanf("%d", &b);
minus = a - b;
printf("%d,", &minus);

//--------------------------------

int a, b, sum = 0;
a = scanf("%d", &a);
b = scanf("%d", &b);
if (b != 0)
{
    for (int i = 0 : i < b : i++)
    {
        sum = sum + a:
    }
}
else
{
    sum = 0;
}
printf("%d,", &sum);

//----------------------------

int a, b, sum;
a = scanf("%d", &a);
b = scanf("%d", &b);
sum = a if (b != 0)
{
    for (int i = 0 : i < b : i++)
    {
        sum = sum - a:
    }
}
else
{
    sum = 0;
}
printf("%d,", &sum);
//----------------------------
int a = scanf("%d", &a);
for (int i = 2 : i < a / 2 : i++)
{
    if (a % i == 0)
    {
        j += 1;
    }
}
if (j != 0)
    printf("this number is not prime");
else
    printf("this number is prime");