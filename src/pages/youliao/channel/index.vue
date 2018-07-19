<template>
  <div class="channel-wrapper">
    <div class="main-table">
      <div class="table-title">有料发帖</div>
      <div class="search">
        <div class="feed-name">搜索贴近号</div>
        <div class="search-tiezi">
          <el-input placeholder="请输入内容" class="search-input">
    <template slot="append"><i class="el-icon-search"></i></template>
  </el-input>
        </div>
        <div class="create-bind" @click="openDialog">新建绑定</div>
      </div>
      <div class="white-bar"></div>
      <div class="table">
        <el-table :data="tableData" class="el-table">
          <el-table-column prop="name" label="贴近号" style="background-color: #eee;">
          </el-table-column>
          <el-table-column prop="feedId" label="贴近号ID">
          </el-table-column>
          <el-table-column prop="channelName" label="绑定的网易有料频道名">
          </el-table-column>
          <el-table-column prop="channelId" label="绑定的网易有料频道ID">
          </el-table-column>
          <el-table-column prop="time" label="创建时间">
          </el-table-column>
          <el-table-column fixed="right" label="操作">
            <template slot-scope="scope">
    <el-button @click="handleClick(scope.row)" type="text" size="small">
      绑定修改</el-button>
</template>
            </el-table-column>
          </el-table>
          <div class="block pagination">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
        </div>
    
      </div>
       <Dialog ref="dialog" v-if="dialogVisible" :visible.sync="dialogVisible"></Dialog>
</div>
</template>

<script>
import Siderbar from "../../../components/sidebar";
import Topheader from "../../../components/topheader";
import Dialog from "../../../components/dialog";
export default {
  name: "feed",
  components: {
    Siderbar,
    Topheader,
    Dialog
  },
  data() {
    return {
      dialogVisible: false,
      value13: [],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      tableData: [
        {
          name: "教务所",
          feedId: "政治频道",
          channelName: "知事局",
          channelId: "1234567",
          time: "2018-05-23 16:23"
        },
        {
          name: "知识局",
          feedId: "政治频道",
          channelName: "知事局",
          channelId: "1234567",
          time: "2018-05-23 16:23"
        },
        {
          name: "耍事台",
          feedId: "政治频道",
          channelName: "知事局",
          channelId: "1234567",
          time: "2018-05-23 16:23"
        },
        {
          name: "教务所",
          feedId: "政治频道",
          channelName: "知事局",
          channelId: "1234567",
          time: "2018-05-23 16:23"
        },
        {
          name: "知识局",
          feedId: "政治频道",
          channelName: "知事局",
          channelId: "1234567",
          time: "2018-05-23 16:23"
        },
        {
          name: "耍事台",
          feedId: "政治频道",
          channelName: "知事局",
          channelId: "1234567",
          time: "2018-05-23 16:23"
        }
      ]
    };
  },
  methods: {
    handleClick(row) {
      console.log(row);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    openDialog() {
      this.dialogVisible = true;
    }
  }
};
</script>

