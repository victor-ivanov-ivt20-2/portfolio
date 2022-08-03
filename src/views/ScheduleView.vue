<template>
  <div class="schedule">
    <table v-if="week != 'ЛЕТО'">
      <thead>
        <tr>
          <th>{{ week }}</th>
          <th>Понедельник</th>
          <th>Вторник</th>
          <th>Среда</th>
          <th>Четверг</th>
          <th>Пятница</th>
          <th>Суббота</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(time, index) in times" :key="time">
            <td>{{ time }}</td>
            <template v-if="week">
                <td v-for="subject in subjectsEven" :key="subject[index]">
                    {{ subject[index] }}
                </td>
            </template>
            <template v-else>
                <td v-for="subject in subjectsOdd" :key="subject[index]">
                    {{ subject[index] }}
                </td>
            </template>
        </tr>
      </tbody>
    </table>
    <div v-else>
        ЛЕТО
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      times: [
        "8:00 - 9:35",
        "9:50 - 11:25",
        "11:40 - 13:15",
        "14:00 - 15:35",
        "15:50 - 17:25",
        "17:40 - 19:15",
      ],
      subjectsEven: [
        ["1", "2", "3", "4", "5", "6"],
        ["1", "2", "3", "4", "5", "6"],
        ["1", "2", "3", "4", "5", "6"],
        ["1", "2", "3", "4", "5", "6"],
        ["1", "2", "3", "4", "5", "6"],
        ["1", "2", "3", "4", "5", "6"],
      ],
      subjectsOdd: [
        ["4", "2", "3", "4", "5", "6"],
        ["1", "2", "3", "4", "5", "6"],
        ["1", "2", "3", "4", "5", "6"],
        ["1", "2", "3", "4", "5", "6"],
        ["1", "2", "3", "4", "5", "6"],
        ["1", "2", "3", "4", "5", "6"],
      ]
    };
  },
  computed: {
    week() {
        let date = new Date();
        if (date.getMonth() >= 5 && date.getMonth() <= 7) 
            return "ЛЕТО";
        let september = new Date(date.getFullYear(), 8, 1);
        if (date.getMonth() < 5) 
            september = new Date(date.getFullYear() - 1, 8, 1);
        const MillisecondsDay = 1000 * 60 * 60 * 24;
        const DaysBetweenDates = Math.ceil(date.getTime() - september.getTime()) / MillisecondsDay;
        const EvenOddDays = DaysBetweenDates + september.getDay() === 0 ? 7 : september.getDay() - 1;
        const EvenOdd = Math.ceil(EvenOddDays / 7) % 2 == 0;
        return EvenOdd;
    }
  }
});
</script>

<style lang="scss">
.schedule {
    table {
        width: 100%;
    }
}
</style>
