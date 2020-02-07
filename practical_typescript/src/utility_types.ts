/** Record */

{
  type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri'
  type Day = Weekday | 'Sat' | 'Sun'

  let nextDay: Record<Weekday, Day>

  nextDay = {
    Mon: 'Tue',
    Tue: 'Wed',
    Wed: 'Thu',
    Thu: 'Fri',
    Fri: 'Sat'
  }

  nextDay = { // Error property Wed is missing
    Mon: 'Tue',
    Tue: 'Wed',
    Thu: 'Fri',
    Fri: 'Sat'
  }

  nextDay = {
    Mon: 'Tue',
    Tue: 'Wed',
    Wed: 'Thu',
    Thu: 'Fri',
    Fri: '???' // type ??? is not assignable to type 'Day'
  }
}
