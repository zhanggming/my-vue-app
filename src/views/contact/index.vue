<template>
  <div class="contact-container">
    <div class="contact-wrapper">
      <div class="self-info">
        <h2 class="title">Let’s discuss your Project</h2>
        <span class="info-text">
          There are many variations of passages of Lorem Ipsu available.
          but the majority have suffered alte.
        </span>
        <div class="self-card">
          <div class="card-item">
            <img src="@/assets/img/location.png" class="icon" />
            <span class="card-content">
              <span class="card-label">Address:</span>
              <span class="card-value">北京</span>
            </span>
          </div>
          <div class="card-item">
            <img src="@/assets/img/location.png" class="icon" />
            <span class="card-content">
              <span class="card-label">My Email:</span>
              <span class="card-value">2727377520@qq.com</span>
            </span>
          </div>
          <div class="card-item">
            <img src="@/assets/img/location.png" class="icon" />
            <span class="card-content">
              <span class="card-label">Call Me Now:</span>
              <span class="card-value">17319252091</span>
            </span>
          </div>
        </div>
      </div>
      <div class="contact-info">
        <el-form ref="ruleFormRef" style="max-width: 600px" :model="ruleForm" :rules="rules" label-width="auto">
          <el-form-item label="Name" prop="name">
            <el-input v-model="ruleForm.name" />
          </el-form-item>
          <el-form-item label="Email" prop="email">
            <el-input v-model="ruleForm.email" />
          </el-form-item>
          <el-form-item label="Phone" prop="phone">
            <el-input v-model="ruleForm.phone" />
          </el-form-item>
          <el-form-item label="Location" prop="location">
            <el-input v-model="ruleForm.location" />
          </el-form-item>
          <el-form-item label="Message" prop="message">
            <el-input v-model="ruleForm.message" type="textarea" />
          </el-form-item>
          <el-form-item>
            <el-button class="say-hello" type="primary" @click="submitForm(ruleFormRef)">
              Create
            </el-button>
            <el-button class="say-hello reset-button" @click="resetForm(ruleFormRef)">Reset</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
const ruleFormRef = ref()
const ruleForm = reactive({
  name: '',
  email: '',
  phone: '',
  location: '',
  message: '',
})
const rules = reactive({
  name: [
    { required: true, message: 'Please input  Name', trigger: 'blur' },
    // { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  email: [
    { required: true, message: 'Please input  email', trigger: 'blur' },
  ],
  phone: [
    { required: true, message: 'Please input  phone', trigger: 'blur' },
  ],
  location: [
    {
      required: true,
      message: 'Please input  location',
      trigger: 'blur',
    },
  ],
  message: [
    {
      required: true,
      message: 'Please input  message',
      trigger: 'blur',
    },
  ],
})
const submitForm = async (formEl) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
      ElMessage({
        message: 'submit success',
        type: 'success',
      })
    } else {
      console.log('error submit!', fields)
    }
  })
}
const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}

onMounted(() => {
  console.log('contact onMounted');
});
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>
