<template>
  <div class="user-modal">
    <el-dialog v-model="showDialogFalg" :title="isNew ? '新增用户' : '编辑用户'" width="30%" center>
      <div class="from">
        <el-form label-width="80px" size="large" :model="modalFormData">
          <el-form-item label="用户名" prop="name">
            <el-input placeholder="请输入用户名" v-model="modalFormData.name" />
          </el-form-item>
          <el-form-item label="真实姓名" prop="realname">
            <el-input placeholder="请输入真实姓名" v-model="modalFormData.realname" />
          </el-form-item>
          <el-form-item label="密码" prop="password" v-if="isNew">
            <el-input
              type="password"
              placeholder="请输入密码"
              show-password
              v-model="modalFormData.password"
            />
          </el-form-item>
          <el-form-item label="电话号码" prop="cellphone">
            <el-input placeholder="请输入手机号" v-model="modalFormData.cellphone" />
          </el-form-item>
          <el-form-item label="选择角色" prop="roleId">
            <el-select
              v-model="modalFormData.roleId"
              clearable
              placeholder="请选择角色"
              style="width: 100%"
            >
              <el-option
                v-for="item in entireRolesList"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="选择部门" prop="departmentId">
            <el-select
              placeholder="请选择部门"
              v-model="modalFormData.departmentId"
              style="width: 100%"
              clearable
            >
              <el-option
                v-for="item in entireDepartmentsList"
                :key="item.id"
                :label="item.name"
                :value="item.id"
            /></el-select>
          </el-form-item>
        </el-form>
      </div>

      <template #footer>
        <div class="dialog-footer">
          <el-button @click="showDialogFalg = false">取消</el-button>
          <el-button type="primary" @click="confirmBtn"> 确定 </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import useMainStore from '@/store/main/main'
import useSystemStore from '@/store/main/system/system'
import { storeToRefs } from 'pinia'
import { ref, reactive } from 'vue'

const mainStore = useMainStore()
const { entireRolesList, entireDepartmentsList } = storeToRefs(mainStore)

const showDialogFalg = ref(false)

interface IModalFormData {
  name: string
  realname: string
  password: string
  cellphone: string
  roleId: string
  departmentId: string
}

const modalFormData = reactive<IModalFormData>({
  name: '',
  realname: '',
  password: '',
  cellphone: '',
  roleId: '',
  departmentId: ''
})

const isNew = ref(true)
const userId = ref()

function showDialog(isNewFlag = true, user?: any) {
  showDialogFalg.value = true
  isNew.value = isNewFlag
  if (!isNewFlag && user) {
    for (const key in modalFormData) {
      modalFormData[key] = user[key]
    }
    userId.value = user.id
  } else {
    for (const key in modalFormData) {
      modalFormData[key] = ''
    }
    userId.value = null
  }
}

//提交
const systemStore = useSystemStore()

function confirmBtn() {
  showDialogFalg.value = false
  if (isNew.value) {
    systemStore.installUserActive(modalFormData)
  } else {
    systemStore.updateUserActive(userId.value, modalFormData)
  }
}

defineExpose({ showDialog })
</script>

<style lang="less" scoped>
.user-modal {
  .from {
    padding: 0 20px;
    margin-top: 30px;
  }
}
</style>
