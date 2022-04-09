import { def } from "@vue/shared";
import { ref } from "vue";
function useMoney(initialTotalMoney) {
  const totalMoney = ref((initialTotalMoney = 0));
  function addMoney(price) {
    totalMoney.value += price;
  }

  return {
    totalMoney,
    addMoney,
  };
}

export default useMoney;
